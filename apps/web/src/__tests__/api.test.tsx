import { beforeEach, describe, expect, it, vi } from "vitest";

const mockFrom = vi.fn();
const mockSelect = vi.fn(() => ({ from: mockFrom }));

const mockReturning = vi.fn();
const mockValues = vi.fn(() => ({ returning: mockReturning }));
const mockInsert = vi.fn(() => ({ values: mockValues }));

const mockWhere = vi.fn();
const mockDelete = vi.fn(() => ({ where: mockWhere }));

vi.mock("../db", () => ({
	getDb: () => ({
		select: mockSelect,
		insert: mockInsert,
		delete: mockDelete,
	}),
}));

import app from "../routes/api";

describe("GET /examples", () => {
	beforeEach(() => {
		vi.clearAllMocks();
	});

	it("returns 200 with HTML containing example items", async () => {
		mockFrom.mockResolvedValueOnce([
			{ id: "uuid-1", title: "Test Item 1", createdAt: new Date() },
			{ id: "uuid-2", title: "Test Item 2", createdAt: new Date() },
		]);

		const res = await app.request("/examples");

		expect(res.status).toBe(200);
		const html = await res.text();
		expect(html).toContain("Test Item 1");
		expect(html).toContain("Test Item 2");
	});

	it("returns 200 with empty content when no examples exist", async () => {
		mockFrom.mockResolvedValueOnce([]);

		const res = await app.request("/examples");

		expect(res.status).toBe(200);
	});
});

describe("POST /examples", () => {
	beforeEach(() => {
		vi.clearAllMocks();
	});

	it("returns 200 with HTML partial on valid input", async () => {
		mockReturning.mockResolvedValueOnce([
			{ id: "uuid-new", title: "New Item", createdAt: new Date() },
		]);

		const res = await app.request("/examples", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: "title=New+Item",
		});

		expect(res.status).toBe(200);
		const html = await res.text();
		expect(html).toContain("New Item");
		expect(mockInsert).toHaveBeenCalled();
	});

	it("returns 400 when title is empty", async () => {
		const res = await app.request("/examples", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: "title=",
		});

		expect(res.status).toBe(400);
		const text = await res.text();
		expect(text).toBe("Invalid input");
		expect(mockInsert).not.toHaveBeenCalled();
	});

	it("returns 400 when title field is missing", async () => {
		const res = await app.request("/examples", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: "",
		});

		expect(res.status).toBe(400);
		expect(mockInsert).not.toHaveBeenCalled();
	});

	it("returns 500 when database returns no rows", async () => {
		mockReturning.mockResolvedValueOnce([]);

		const res = await app.request("/examples", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: "title=Something",
		});

		expect(res.status).toBe(500);
		const text = await res.text();
		expect(text).toBe("Failed to create");
	});
});

describe("DELETE /examples/:id", () => {
	beforeEach(() => {
		vi.clearAllMocks();
	});

	it("returns 200 on successful delete", async () => {
		mockWhere.mockResolvedValueOnce(undefined);

		const res = await app.request("/examples/some-uuid-123", {
			method: "DELETE",
		});

		expect(res.status).toBe(200);
		expect(mockDelete).toHaveBeenCalled();
		expect(mockWhere).toHaveBeenCalled();
	});
});
