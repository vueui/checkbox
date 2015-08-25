
import tpl from './template.jade'

let definition = {
	template: tpl,
	props: {
		label: {
			type: String,
			required: true
		},
		model: {
			twoWay: true
		},
		type: {
			type: String,
			validator(value) {
				return value === 'slider' || value === 'toggle'
			}
		}
	},
	compiled() {
		console.log('Before compile...')
		console.log(this.$el)
	}
}

export default Vue => Vue.component('ui-checkbox', definition)