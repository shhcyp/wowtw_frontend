// import { ref } from 'vue'

export default function useFormInput(formData) {
  const updateFormData = (field, value) => {
    formData[field] = value
  }

  return {
    updateFormData
  }
}
