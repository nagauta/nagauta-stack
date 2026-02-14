import type { FC } from "hono/jsx";

type Props = {
	id: string;
	title: string;
};

export const ExampleItem: FC<Props> = ({ id, title }) => (
	<div class="flex justify-between items-center p-4 border-b">
		<span>{title}</span>
		<button
			type="button"
			hx-delete={`/api/examples/${id}`}
			hx-target="closest div"
			hx-swap="outerHTML"
			class="text-red-500 hover:text-red-700"
		>
			削除
		</button>
	</div>
);
