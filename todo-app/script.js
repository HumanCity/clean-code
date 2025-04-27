// Menangani penambahan tugas
document.getElementById('addButton').addEventListener('click', function () {
    const taskInput = document.getElementById('taskInput');
    const taskName = taskInput.value.trim();
  
    if (taskName) {
      addTask(taskName);
      taskInput.value = ''; // Reset input field setelah menambahkan tugas
    }
  });
  
  // Fungsi untuk menambah tugas ke dalam daftar
  function addTask(taskName) {
    const taskList = document.getElementById('taskList');
    
    // Membuat elemen list item baru
    const li = document.createElement('li');
  
    // Membuat checkbox untuk menandai tugas selesai
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('checkbox');
    checkbox.addEventListener('change', function () {
      toggleTaskCompletion(li);
    });
  
    // Membuat tombol hapus
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function () {
      deleteTask(li);
    });
  
    // Menambahkan elemen ke dalam list item
    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(taskName));
    li.appendChild(deleteButton);
  
    // Menambahkan list item ke dalam daftar tugas
    taskList.appendChild(li);
  }
  
  // Fungsi untuk menandai tugas sebagai selesai
  function toggleTaskCompletion(taskItem) {
    taskItem.classList.toggle('completed');
  }
  
  // Fungsi untuk menghapus tugas
  function deleteTask(taskItem) {
    taskItem.remove();
  }
  