document.addEventListener("DOMContentLoaded", function() {
  const elm_boxs = document.querySelectorAll(".box")

  elm_boxs.forEach(function(item) {
      let port = item.children[0]
      let edit_btn = item.children[1]

      edit_btn.addEventListener("click", function(e) {
        if (port.style.display === "none") {
          return
        }

        port.style.display = "none"
        item.insertAdjacentHTML("beforeend", `
          <input type="number" class="edit-input" value="${port.innerText}"/>
          <button type="button" class="save-button">ثبت</button>
        `)

          const elm_save_buttons = document.querySelectorAll(".save-button")

          elm_save_buttons.forEach(function(item) {
            item.addEventListener("click", function() {
              item.previousElementSibling.previousElementSibling.previousElementSibling.innerText = item.previousElementSibling.value
              item.previousElementSibling.previousElementSibling.previousElementSibling.style.display = "inline"
              item.previousElementSibling.remove()
              item.remove()
            })
          })

      })
  })
})
