let todos = [
  {
    id: 1,
    title: "cuci tangan",
    isDone: true,
  },
  {
    id: 2,
    title: "jaga jarak",
    isDone: true,
  },
];

exports.getTodos = async (req, res) => {
  try {
    res.send({
      status: "success",
      data: {
        todos,
      },
    });
  } catch (error) {
    res.send({
      status: "failed",
      message: "server error",
    });
  }
};

exports.getTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const data = todos.find((todo) => todo.id == id);

    res.send({
      status: "success",
      data: {
        todo: data,
      },
    });
  } catch (error) {
    res.send({
      status: "failed",
      message: "Server error",
    });
  }
};

exports.addTodo = async (req, res) => {
  try {
    const data = req.body;
    todos.push(data);
    res.send({
      status: "success",
      data: {
        todos,
      },
    });
  } catch (error) {
    res.send({
      status: "failed",
      message: "server error",
    });
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    todos = todos.map((todo) => {
      if (todo.id == id) {
        return req.body;
      } else {
        return todo;
      }
    });

    const data = todos.find((todo) => todo.id == id);
    res.send({
      status: "success",
      data: {
        todo: data,
      },
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
};
