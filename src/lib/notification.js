import { notify } from 'react-notify-toast'

const notification = message => {
  notify.show(message, 'custom', 3000, { background: 'F0F0F0' })
}

export default notification