import type { FC } from "hono/jsx";
import { BaseLayout } from "../layouts/base";

export const HomePage: FC = () => (
	<BaseLayout>
		<main class="max-w-2xl mx-auto p-8">
			<h1 class="text-3xl font-bold mb-4">nagauta-stack</h1>
			<p class="text-gray-600 mb-8">Hono + htmx + Tailwind CSS</p>

			<form
				hx-post="/api/examples"
				hx-target="#example-list"
				hx-swap="beforeend"
				hx-on--after-request="this.reset()"
				class="flex gap-2 mb-8"
			>
				<input
					type="text"
					name="title"
					placeholder="タイトルを入力"
					required
					class="flex-1 border rounded px-3 py-2"
				/>
				<button
					type="submit"
					class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
				>
					追加
				</button>
			</form>

			<div
				id="example-list"
				hx-get="/api/examples"
				hx-trigger="load"
				hx-swap="innerHTML"
			>
				読み込み中...
			</div>
		</main>
	</BaseLayout>
);
