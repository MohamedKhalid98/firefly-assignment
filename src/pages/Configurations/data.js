export const data = [
  {
    id: "a23b67c980efd8aeb7fb766fbc89132f7cf9e2b4",
    message: "Add new feature",
    username: "Tyrion Lannister",
    timestamp: 1644945699,
    file_name: "main.yml",
    code_block:
      "# Cloud configuration YAML file for Add new feature\n\nrun:\n  def new_feature():\n    print('This is a new feature!')\n\nchanges:\n  - replace: '' with: ''",
  },
  {
    id: "b6ca1f6c01c8f1d7c2950e54252bca9e8dfe27b79",
    message: "Fix bug in login",
    username: "Cersei Lannister",
    timestamp: 1644875341,
    code_block:
      "# Cloud configuration YAML file for Fix bug in login\n\nrun:\n  def login(username, password):\n    # Fix bug here\n\nchanges:\n  - replace: '' with: ''",
  },
  {
    id: "c823e95a102cdd132d6b5c5e5e6da350dcedb62a",
    message: "Refactor new_feature() function",
    timestamp: 1644869232,
    file_name: "main.yml",
    code_block:
      "# Cloud configuration YAML file for Refactor new_feature() function\n\nrun:\n  new_feature:\n    def new_feature():\n        print('This is the updated new feature!')\n        print('This is another line!')\n\nchanges:\n  - replace: 'This is a new feature!' with: 'This is the updated new feature!'\n  - insert: 'This is another line!'\n",
  },
  {
    id: "b6ca1f6c01c8f1d7c2950e54252bca9e8dfe27b7",
    message: "Fix typo in login function",
    username: "Cersei Lannister",
    timestamp: null,
    file_name: "login.yml",
    code_block:
      "# Cloud configuration YAML file for Fix typo in login function\n\nrun:\n  login:\n    def login(username, password):\n        # Fix typo here\n\nchanges:\n  - replace: 'bug' with: 'typo'\n",
  },
  {
    id: "e50d14e014b0c3d03f3153e734c7d76e3c2a0356",
    username: "Daenerys Targaryen",
    timestamp: 1644778913,
    file_name: "main.yml",
    code_block:
      "# Cloud configuration YAML file for updated new_feature() function\n\nrun:\n  new_feature:\n    def new_feature(param1):\n        print('This is the updated new feature!')\n        print('This is another line!')\n        print('The new parameter is:', param1)\n\nchanges:\n  - replace: 'def new_feature():' with: 'def new_feature(param1):'\n  - insert: 'print('The new parameter is:', param1)'",
  },

  {
    id: "e50d14e01aab0c3d03f3153e734c7d76e3c2a0356",
    message: "Add second parameter to new_feature() function",
    username: "Jon Snow",
    timestamp: 1644778921,
    file_name: "main.yml",
    code_block:
      "# Cloud configuration YAML file for updated new_feature() function\n\nrun:\n  def new_feature(param1):\n        print('This is the updated new feature!')\n        print('This is another line!')\n        print('The new parameter is:', param1)\n\nchanges:\n  - replace: 'def new_feature():' with: 'def new_feature(param1):'\n  - insert: 'print('The new parameter is:', param1)'",
  },
  {
    id: "d17c34cfa1be0b07e7d0d654aeb22e5c8219eb95",
    message: "Add new parameter to new_feature() function",
    username: "Jon Snow",
    timestamp: 1644778938,
    file_name: "",
    code_block:
      "# Cloud configuration YAML  function\n\nrun:\n  new_feature:\n    def new_:\n        print('This is the updated new feature!')\n        print('This is another line!')\n        print('The new parameter is:', param1)\n\nchanges:\n  - replace: 'def new_feature():' with: 'def new_feature(param1):'\n  - insert: 'print('The new parameter is:', param1)'",
  },
];
