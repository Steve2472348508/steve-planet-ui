import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import VPTheme from 'vitepress/theme'
import DemoComp from "./components/DemoComp.vue"
import {setupPlanetUI} from "steve-planet-ui";
import "steve-planet-ui/dist/style.css"

import './custom.css'

export default {
	...VPTheme,
	extends: DefaultTheme,
	enhanceApp({ app }) {
		app.use(setupPlanetUI())
		app.component('DemoComp', DemoComp)
	}
} as Theme
