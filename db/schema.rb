# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_02_06_102933) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cycles", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.text "quote"
    t.string "img_url"
    t.datetime "start_date"
    t.datetime "end_date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "color"
    t.string "slug"
  end

  create_table "halls", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "movies", force: :cascade do |t|
    t.string "title"
    t.string "runtime"
    t.string "director"
    t.text "description"
    t.text "quote"
    t.string "img_url"
    t.string "year"
    t.bigint "session_id", null: false
    t.bigint "cycle_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "slug"
    t.index ["cycle_id"], name: "index_movies_on_cycle_id"
    t.index ["session_id"], name: "index_movies_on_session_id"
  end

  create_table "news", force: :cascade do |t|
    t.string "title"
    t.text "description"
    t.string "link"
    t.string "img_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "seats", force: :cascade do |t|
    t.string "row"
    t.string "column"
    t.bigint "hall_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["hall_id"], name: "index_seats_on_hall_id"
  end

  create_table "sessions", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.text "quote"
    t.datetime "play_time"
    t.bigint "cycle_id", null: false
    t.bigint "hall_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["cycle_id"], name: "index_sessions_on_cycle_id"
    t.index ["hall_id"], name: "index_sessions_on_hall_id"
  end

  add_foreign_key "movies", "cycles"
  add_foreign_key "movies", "sessions"
  add_foreign_key "seats", "halls"
  add_foreign_key "sessions", "cycles"
  add_foreign_key "sessions", "halls"
end
