class User < ApplicationRecord
  attr_reader :password 

  validates :username, :email, :password_digest, :session_token, presence: true 
  validates :username, :email, uniqueness: true
  validates :password, length: {minimum: 6}, allow_nil: true 

  before_validation :ensure_session_token 

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

  def self.find_by_credentials(username, password) 
    user = User.find_by(username: username) 
    return nil unless user 
    user.is_password?(password) ? user: nil 
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
