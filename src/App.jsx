import React from 'react'
import Todo from './components/Todo'
import DynaicFormBuilder from './components/DynaicFormBuilder'
import ShoppingCartCounter from './components/ShoppingCartCounter'
import AutoSaveNotes from './components/Auto-Save-Notes'
import PasswordStrength from './components/PasswordStrength'
import TodoListWithPrioritis from './components/TodoListWithPrioritis'
import ClickOutside from './components/ClickOutside'
import UserProfileLoader from './components/UserProfileLoader'
import GitHubUserSearch from './components/GitHubUserSearch'
import DashboardWidgets from './components/DashboardWidgets'

const App = () => {
  return (
    <div>
      {/* <Todo/> */}
      {/* <DynaicFormBuilder/> */}
      {/* <ShoppingCartCounter/> */}
      {/* <AutoSaveNotes/> */}
      {/* <PasswordStrength/> */}
      {/* <TodoListWithPrioritis/> */}
      {/* <ClickOutside callback={()=> alert("Clicked outside")}>
        This is box 
      </ClickOutside> */}
      {/* <UserProfileLoader/> */}
      {/* <GitHubUserSearch/> */}
      <DashboardWidgets/>
    </div>
  )
}

export default App
