interface Todo {
    tetle: string;
    description: string
}

type ParcialTodo = Partial<Todo>;
type ReadonlyTodo = Readonly<Todo>;

type T = NonNullable< string | number | null | undefined >;

type RequiredTodo = Required<Todo>;