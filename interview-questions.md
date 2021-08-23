# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating an API with a model called Animal that has_many Sightings, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be part of the Animal model or the Sightings model?

  Your answer:

  Researched answer: Fix with generating a migration, add a column to the Sightings model called animal_id, data type integer, run the migration



2. Which RESTful API routes must always be passed params? Why?

  Your answer:

  Researched answer:
    RESTful Routes (7): edit, update, destroy, index, new, create, show
    RESTful API Routes (5): update, destroy, index, create, show
    RESTful API Routes with params (3): update, destroy, show - we the id of the item



3. Name three rails generator commands. What is created by each?

  Your answer:

  Researched answer:
  model - migration, model class,
  resource - model, migration, controller, routes
  migration - migration file
  controller - controller, view folder
  scaffold - working app :)
  rspec - spec folder


4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

method="GET"    /students         index, display a list of all students

method="POST"   /students         create, adding a new student

method="GET"    /students/new     new, form for creating a new student

method="GET"    /students/2       show, display student with the id of 2

method="GET"    /students/2/edit  edit, form for updating an existing item in the db

method="PATCH"  /students/2       update, updates the attributes of student with an id of 2

method="DELETE" /students/2      destroy, deletes the student with id of 2



5. As a developer, you want to make an application that will help you manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).
