export const state = () => ({
    menuOpen : true,
    lang: true

})
  
  export const mutations = {
    MENU_OPEN(state,bool) {
        state.menuOpen = bool
    },
    CHANGE_LANG(state,bool){
        state.lang = bool
    }
  }