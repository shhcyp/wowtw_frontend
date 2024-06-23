export const hideScrollBar = () => {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
    document.body.style.paddingRight = scrollbarWidth + 'px'
    document.body.style.overflow = 'hidden'
}
export const showScrollBar = () => {
    document.body.style.paddingRight = ''
    document.body.style.overflow = 'auto'
}

export const lockLandscape = async (_state) => {
    if (!_state.value) {
      await screen.orientation.lock('landscape').catch(e => console.error(e))
    //   _state.value = true;
    }
    console.log(!_state.value);
  };
   
export const unlockOrientation = async (_state) => {
    if (_state.value) {
      await screen.orientation.unlock().catch(e => console.error(e))
    //   _state.value = false;
    }
    console.log(!_state.value);
  };

export function sum(a, b) {
    return a + b
}