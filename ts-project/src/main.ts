import "./style.css"
import FullList from './model/fullList'
import ListItem from './model/listItem'
import ListTemplate from './ListTemplate'

const initApp = (): void => {
  const fullList = FullList.instance
  const template = ListTemplate.instance

  // Add listener to new entry form submit
  const itemEntryForm = document.getElementById("list-form") as HTMLFormElement

  itemEntryForm.addEventListener("submit", (event: SubmitEvent): void => {
    event.preventDefault()

    // Get the new item value
    const input = document.getElementById("list-input") as HTMLInputElement
    const newEntryText: string = input.value.trim()
    if (!newEntryText.length) return

    // calculate item ID
    const itemId: number = fullList.list.length
      ? parseInt(fullList.list[fullList.list.length - 1].id) + 1
      : 1

    // create new item
    const newItem = new ListItem(itemId.toString(), newEntryText)
    // Add new item to full list
    fullList.addItem(newItem)
    // Re-render list with new item included
    template.render(fullList)
  })

  // Add listener to "Clear" button
  const clearItems = document.getElementById("clear-btn") as HTMLButtonElement

  clearItems.addEventListener('click', (): void => {
    fullList.clearList()
    template.clear()
  })

  // load initial data
  fullList.load()
  // initial render of template
  template.render(fullList)
}

document.addEventListener("DOMContentLoaded", initApp) 