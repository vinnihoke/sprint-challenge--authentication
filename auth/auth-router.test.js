const db = require('../database/dbConfig.js');
const Jokes = require('../jokes/jokes-model.js');

describe('Authentication Testing', () => {
	beforeEach(async () => {
		await db('users').truncate();
	})

	describe('Register Testing', () => {
		test("Register adds user to DB", async () => {
			let users;
			users = await db('users');
			expect(users).toHaveLength(0);

			// Register two new users
			await Jokes.add({ id: 1, username: "Test 1", password: "test1234" });
			await Jokes.add({ id: 2, username: "Test 2", password: "test1234" });

			// Expect users to be 2 upon refresh
			users = await db('users');
			expect(users).toHaveLength(2);
		})
	})

	describe('Login Testing', () => {
		test("Login checks DB for a new user", async () => {

			// Store current users
			let user;

			// Add user to DB
			await Jokes.add({ id: 1, username: "Test 1", password: "test1234" });

			user = await db('users');

			// Find user by username
			user = await Jokes.findById(1);

			// Check that user 
			expect(user).toHaveProperty('id');
			expect(user).toHaveProperty('username');
			expect(user).toHaveProperty('password');
		})
	})
})