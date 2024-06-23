import { ref } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, helpers, minLength, maxLength } from '@vuelidate/validators'

export default {
  setup () {
    const form = ref({
      username: '',
      password: '',
      contact: {
        phoneNumber: ''
      }
    })
    const rules = {
        username: {
            required,
            minLength: minLength(6),
            maxLength: maxLength(16)
        },
        password: {
            required,
            minLength: minLength(6),
            maxLength: maxLength(14)
        },
      contact: {
        phoneNumber: {
            required,
            minLength: minLength(11),
            maxLength: maxLength(11),
            isValid: helpers.withMessage('请检查手机号是否有效'),
            isValidPhoneNumber(value) {
                const regex = /^\d{11,11}$/
                return regex.test(value)
            }
        }
      }
    }

    const v$ = useVuelidate(rules, form)

    return { form, v$ }
  }
}