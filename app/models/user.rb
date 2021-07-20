# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
  attr_reader :password

  validates :username, :email, :password_digest, :session_token, presence: true
  validates :username, :email, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  before_validation :ensure_session_token

  has_many :reviews, foreign_key: :reviewer_id, class_name: :Review

  has_one :cart, foreign_key: :user_id, class_name: :Cart

  has_many :products_in_cart, through: :cart, source: :cart_items

  has_many :items_for_sale, foreign_key: :seller_id, class_name: :Product

  #G-PERCS

  def password=(pw)
    @password = pw
    self.password_digest = BCrypt::Password.create(pw)
  end

  def reset_session_token!
    generate_unique_session_token
    self.save!
    self.session_token
  end

  def correct_password?(pw)
    BCrypt::Password.new(self.password_digest).is_password?(pw)
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user
    user.correct_password?(password) ? user : nil
  end

  private

  def ensure_session_token
    generate_unique_session_token unless self.session_token
  end

  def generate_session_token
    SecureRandom.urlsafe_base64
  end

  def generate_unique_session_token
    self.session_token = generate_session_token
    while User.find_by(session_token: self.session_token)
      self.session_token = generate_session_token
    end
    self.session_token
  end
end
