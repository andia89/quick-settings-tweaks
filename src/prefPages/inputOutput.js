import Adw from "gi://Adw"
import GObject from "gi://GObject"

import { gettext as _ } from "resource:///org/gnome/Shell/Extensions/js/extensions/prefs.js"

import { baseGTypeName, makeSwitch } from "../libs/prefComponents.js"

export const inputOutputPage = GObject.registerClass({
    GTypeName: baseGTypeName+'inputOutputPage',
}, class inputOutputPage extends Adw.PreferencesPage {
    constructor(settings) {
        // group config
        super({
            name: 'inputOutput',
            title: _('Input/Output'),
            iconName: 'audio-input-microphone-symbolic'
        })

        const group = new Adw.PreferencesGroup()
        makeSwitch({
            parent: group,
            title: _("Show current audio output selection"),
            value: settings.get_boolean("output-show-selected"),
            subtitle: _("Always show the current audio output selection above the volume slider"),
            bind: [settings, "output-show-selected"]
        })
        makeSwitch({
            parent: group,
            title: _("Show current audio input selection"),
            value: settings.get_boolean("input-show-selected"),
            subtitle: _("Always show the current audio input selection above the volume slider"),
            bind: [settings, "input-show-selected"]
        })
        makeSwitch({
            parent: group,
            title: _("Always show input"),
            value: settings.get_boolean("input-always-show"),
            subtitle: _("Always show the audio input volume slider, even when there is no audio input stream."),
            bind: [settings, "input-always-show"]
        })

        this.add(group)
    }
})