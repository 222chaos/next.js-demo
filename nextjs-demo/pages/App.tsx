import React, { useState } from "react";
import { Button, Space } from "antd";
import { Input } from "antd";
import { List } from "antd";
import {
  PaginationAlign,
  PaginationPosition,
} from "antd/es/pagination/Pagination";

function App() {
  function change() {
    setTodo([...todo, state]);
    updateState("");
  }
  function onDelete(index: any) {
    todo.splice(index, 1);
    setTodo([...todo]);
  }
  function swapItem(index1: any, index2: any) {
    var temp = todo[index1];
    todo[index1] = todo[index2];
    todo[index2] = temp;
    setTodo([...todo]);
  }

  const [todo, setTodo] = useState<Array<string>>([]);
  const [state, updateState] = useState<string>("");
  const [clickPageNum, setClickPageNum] = useState<number>();
  let total = 0;
  const [todo1, setTode] = useState(() => {
    const todoList = [];
    for (let index = 0; index < 100; index++) {
      total++;
      todoList.push({
        title: "title" + index,
        desc: "desc" + index,
      });
    }
    return todoList;
  });
  /*
   */
  const [position, setPosition] = useState<PaginationPosition>("bottom");
  const [align, setAlign] = useState<PaginationAlign>("end");
  //Math.floor((total + pagesize - 1) / pagesize));
  return (
    <article>
      <h1>Todo</h1>
      <Space>
        <Input
          style={{ width: 1293 }}
          placeholder="请输入"
          value={state}
          onChange={(e) => {
            updateState(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setTodo([...todo, state]);
              updateState("");
            }
          }}
        ></Input>
        <Space wrap>
          <Button
            type="dashed"
            onClick={() => {
              change();
            }}
          >
            Orz
          </Button>
        </Space>
      </Space>

      <List
        style={{ marginTop: 24 }}
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={todo}
        renderItem={(item) => <List.Item>{item}</List.Item>}
        pagination={{
          position,
          align,
          defaultCurrent: 1,
          total: todo.length,
          pageSize: 5,
        }}
      />
    </article>
  );
}
export default App;
