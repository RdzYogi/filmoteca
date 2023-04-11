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

ActiveRecord::Schema[7.0].define(version: 2023_04_11_121021) do
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

  create_table "jwt_denylist", force: :cascade do |t|
    t.string "jti", null: false
    t.datetime "exp", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["jti"], name: "index_jwt_denylist_on_jti"
  end

  create_table "messages", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "subject"
    t.text "message"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "read", default: false
    t.boolean "deleted", default: false
  end

  create_table "movies", force: :cascade do |t|
    t.string "title"
    t.string "runtime"
    t.string "director"
    t.text "description"
    t.text "quote"
    t.string "img_url"
    t.string "year"
    t.bigint "cycle_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "slug"
    t.text "shorts", default: ""
    t.index ["cycle_id"], name: "index_movies_on_cycle_id"
  end

  create_table "news", force: :cascade do |t|
    t.string "title"
    t.text "description"
    t.string "link"
    t.string "img_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "prices", force: :cascade do |t|
    t.integer "ticket_price_normal"
    t.integer "ticket_price_discount"
    t.integer "abono_price_normal"
    t.integer "abono10_price_normal"
    t.integer "abono_price_discount"
    t.integer "abono10_price_discount"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "projections", force: :cascade do |t|
    t.bigint "movie_id", null: false
    t.bigint "session_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["movie_id"], name: "index_projections_on_movie_id"
    t.index ["session_id"], name: "index_projections_on_session_id"
  end

  create_table "reservations", force: :cascade do |t|
    t.bigint "session_id", null: false
    t.bigint "seat_id", null: false
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "subscription_id"
    t.integer "abono_ticket_count"
    t.index ["seat_id"], name: "index_reservations_on_seat_id"
    t.index ["session_id"], name: "index_reservations_on_session_id"
    t.index ["subscription_id"], name: "index_reservations_on_subscription_id"
    t.index ["user_id"], name: "index_reservations_on_user_id"
  end

  create_table "seats", force: :cascade do |t|
    t.string "row"
    t.string "column"
    t.bigint "hall_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "available", default: true
    t.index ["hall_id"], name: "index_seats_on_hall_id"
  end

  create_table "sessions", force: :cascade do |t|
    t.datetime "play_time"
    t.bigint "hall_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["hall_id"], name: "index_sessions_on_hall_id"
  end

  create_table "subscriptions", force: :cascade do |t|
    t.datetime "start_date"
    t.datetime "end_date"
    t.integer "remaining_uses"
    t.string "tipo"
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_subscriptions_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "admin", default: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "movies", "cycles"
  add_foreign_key "projections", "movies"
  add_foreign_key "projections", "sessions"
  add_foreign_key "reservations", "seats"
  add_foreign_key "reservations", "sessions"
  add_foreign_key "reservations", "subscriptions"
  add_foreign_key "reservations", "users"
  add_foreign_key "seats", "halls"
  add_foreign_key "sessions", "halls"
  add_foreign_key "subscriptions", "users"
end
