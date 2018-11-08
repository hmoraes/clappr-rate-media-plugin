import MD5 from 'md5-es';
import {Events, Styler, UICorePlugin, Browser, $} from 'clappr';

import pluginStyle from './public/style.scss';


export default class RateMediaPlugin extends UICorePlugin {

	get name() {
		return 'rate-media-plugin'
	}

	get attributes() {
		return {
			'class': this.name
		}
	}

	get stylesheet() {
		return Styler.getStyleFor(pluginStyle, {baseUrl: this.options.baseUrl})
	}

	get persistConfig() {
		if (Browser.hasLocalstorage) {
			const config = localStorage[`clappr.${document.domain}.${this.name}`];
			return config ? JSON.parse(config) : {};
		}
		return RateMediaPlugin._localStorage || {};
	}

	saveConfig(config) {
		if (Browser.hasLocalstorage) {
			try {
				localStorage[`clappr.${document.domain}.${this.name}`] = JSON.stringify(config);
				return true
			} catch (e) {
			}
		}
		RateMediaPlugin._localStorage = config;
	}

	constructor(core) {
		super(core);

		this._mediaControlVisible = false;
		this._stopped = true;
		this._ready = false;
		var options = this._getOptions();
		this._enabled = typeof(options.enabled) === "undefined" || !!options.enabled;
		this._visible = false;
		this._renderPlugin();

		// so that it fades in on load
		this._enableTimeoutId = setTimeout(() => {
			this._enableTimeoutId = null;
			this._ready = true;
			this._renderPlugin();
		}, 0)
	}

	bindEvents() {
		this.listenTo(this.core.mediaControl, Events.MEDIACONTROL_CONTAINERCHANGED, this._onMediaControlContainerChanged);
	}

	unBindEvents() {
		this.stopListening(this.core.mediaControl, Events.MEDIACONTROL_CONTAINERCHANGED, null);
	}

	_onMediaControlContainerChanged() {
		this._bindContainerEvents();
		this._appendElToContainer();
	}

	_bindContainerEvents() {
		if (this._oldContainer) {
			this.stopListening(this._oldContainer, Events.CONTAINER_MEDIACONTROL_SHOW, this._onMediaControlShow);
			this.stopListening(this._oldContainer, Events.CONTAINER_MEDIACONTROL_HIDE, this._onMediaControlHide);
			this.stopListening(this._oldContainer, Events.CONTAINER_STOP, this._onStop);
			this.stopListening(this._oldContainer, Events.CONTAINER_ENDED, this._onStop);
			this.stopListening(this._oldContainer, Events.CONTAINER_PLAY, this._onPlay);
		}
		this._oldContainer = this.core.mediaControl.container;
		this.listenTo(this.core.mediaControl.container, Events.CONTAINER_MEDIACONTROL_SHOW, this._onMediaControlShow);
		this.listenTo(this.core.mediaControl.container, Events.CONTAINER_MEDIACONTROL_HIDE, this._onMediaControlHide);
		this.listenTo(this.core.mediaControl.container, Events.CONTAINER_STOP, this._onStop);
		this.listenTo(this.core.mediaControl.container, Events.CONTAINER_ENDED, this._onStop);
		this.listenTo(this.core.mediaControl.container, Events.CONTAINER_PLAY, this._onPlay);
	}

	reload() {
		this.unBindEvents();
		this.bindEvents();
	}

	_getOptions() {
		if (!("rateMediaPlugin" in this.core.options)) {
			throw "'rateMediaPlugin' property missing from options object.";
		}
		return this.core.options.rateMediaPlugin;
	}

	_onStop() {
		this._stopped = true;
		this._renderPlugin();
	}

	_onPlay() {
		this._stopped = false;
		this._renderPlugin();
	}

	_onMediaControlShow() {
		this._mediaControlVisible = true;
		this._renderPlugin();
	}

	_onMediaControlHide() {
		this._mediaControlVisible = false;
		this._renderPlugin();
	}

	_renderPlugin() {
		const show = this._visible = this._ready && this._enabled && (this._stopped || this._mediaControlVisible);
		this._$headingContainer.attr("data-visible", show ? "1" : "0");
	}

	_appendElToContainer() {
		this.core.mediaControl.container.$el.append(this.el);
	}

	setEnabled(enabled) {
		this._enabled = !!enabled;
		this._renderPlugin();
	}

	_re_render() {
		this.render();
		this._renderPlugin();
	}

	render() {
		const $el = $(this.el).empty();
		const $container = this._$headingContainer = $("<div />").addClass("rate-media-container").attr("data-visible", "0");

		this._renderButtons();

		$el.append($container);
		$el.append(this.stylesheet);
		return this;
	}

	_renderButtons() {
		const $container = this._$headingContainer;
		const buttons = this._getOptions().buttons;
		for (let key in buttons) {
			const button = buttons[key];
			const $button = $("<button/>").addClass(key).attr("data-button-type", key).attr("title", button.text);
			const $button_circle = $("<div/>").addClass("circle");
			const $button_icon = $("<div/>").addClass(button.icon.default || "thumbs-up");

			const hash = MD5.hash(button.url);
			if (this.persistConfig[hash]) $button.addClass("clicked");

			$button
				.append($button_circle)
				.append($button_icon)
				.click((e) => {
					e.preventDefault();
					e.stopImmediatePropagation();

					const config = this.persistConfig;
					if (this._visible && !config[hash]) {
						$.ajax({
							url: button.url,
							type: 'POST',
							cache: false,
							xhrFields: {withCredentials: true},
							success: (result, status, xhr) => {
								config[hash] = true;
								this.saveConfig(config);
								this._re_render();
							},
							error: (xhr, status, error) => {
								console.log(`Error: ${error}`);
							}
						});
					}
				});
			$container.append($button);
		}
	}

	destroy() {
		if (this._enableTimeoutId) {
			clearTimeout(this._enableTimeoutId);
			this._enableTimeoutId = null;
		}
	}
}
