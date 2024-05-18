package main

import (
	"crypto/rand"
	"encoding/base64"
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
)

type Call struct {
	Name  string `json:"name"`
	Phone string `json:"phone"`
}

type Appointment struct {
	Login string `json:"login"`
	Date  string `json:"date"`
	Time  string `json:"time"`
	Name  string `json:"name"`
	Mail  string `json:"mail"`
}

type User struct {
	Role     *string `json:"role"`
	Login    string  `json:"login"`
	Password *string `json:"password"`
	Token    *string `json:"token"`
}

const RoleAdmin = "ADMIN"
const RoleClient = "CLIENT"

var adminRole = RoleAdmin
var adminPassword = "default"

var users = []User{
	{
		Role:     &adminRole,
		Login:    "admin",
		Password: &adminPassword,
	},
}

var aps []Appointment

func FindUserByToken(users []User, token string) *User {
	var user *User

	for i := range users {
		if users[i].Token == &token {
			user = &users[i]

		}
	}
	return user
}
func FindUserByLogin(users []User, login string) *User {
	var user *User

	for i := range users {
		if users[i].Login == login {
			user = &users[i]
		}
	}
	return user
}
func IsUserClientByToken(users []User, token string) bool {
	isUser := false

	var clientRole = RoleClient

	for i := range users {
		if *users[i].Token == token && *users[i].Role == clientRole {
			isUser = true
		}
	}
	return isUser
}
func IsUserAdmintByToken(users []User, token string) bool {
	isUser := false

	var adminRole = RoleAdmin

	for i := range users {
		if *users[i].Token == token && *users[i].Role == adminRole {
			isUser = true
		}
	}
	return isUser
}

func FindAppointmentsByLogin(aps []Appointment, login string) []Appointment {
	var newAps []Appointment

	for i := range aps {
		if aps[i].Login == login {
			newAps = append(newAps, aps[i])
		}
	}
	return newAps
}

func UpdateUserTokenByLogin(users []User, login string, token string) []User {

	for i := range users {
		if users[i].Login == login {
			users[i].Token = &token
		}
	}
	return users
}

func generateToken() *string {
	buffer := make([]byte, 64)
	_, err := rand.Read(buffer)
	if err != nil {
		return nil
	}
	token := base64.StdEncoding.EncodeToString(buffer)
	return &token

}

func main() {
	log.Print("Тестовый сервер")
	r := gin.Default()

	r.POST("/api/registration", func(c *gin.Context) {
		var user User
		err := c.BindJSON(&user)
		if err != nil {
			c.JSON(http.StatusBadRequest, gin.H{
				"error": "Invalid JSON",
			})
			return
		}
		var clientRole = RoleClient
		user.Role = &clientRole
		users = append(users, user)
		c.JSON(http.StatusOK, gin.H{
			"message": "Регистрация прошла",
		})

	})
	r.POST("/api/login", func(c *gin.Context) {
		var user User
		err := c.BindJSON(&user)
		if err != nil {
			c.JSON(http.StatusBadRequest, gin.H{
				"error": "Invalid JSON",
			})
			return
		}
		oldUser := FindUserByLogin(users, user.Login)

		if oldUser == nil {
			c.JSON(http.StatusUnauthorized, gin.H{
				"error": "неверные логин или пароль",
			})
		}
		token := generateToken()
		if oldUser == nil {
			c.JSON(http.StatusBadRequest, gin.H{
				"error": "Ошибка при авторизации",
			})
		}
		users = UpdateUserTokenByLogin(users, oldUser.Login, *token)

		c.JSON(http.StatusOK, gin.H{
			"token": token,
		})
	})
	r.GET("/api/profile", func(c *gin.Context) {
		token := c.GetHeader("authorization")

		user := FindUserByToken(users, token)

		if user == nil {
			c.JSON(http.StatusBadGateway, gin.H{
				"error": "Ошибка",
				"token": token,
				"user":  user,
			})
			return
		}
		c.JSON(http.StatusOK, user)
	})

	r.POST("api/appointment/add", func(c *gin.Context) {
		var ap Appointment
		err := c.BindJSON(&ap)
		if err != nil {
			c.JSON(http.StatusBadRequest, gin.H{
				"error": "Invalid JSON",
			})
			return
		}
		aps = append(aps, ap)

		c.JSON(http.StatusOK, nil)
	})

	r.GET("/api/appointments", func(c *gin.Context) {
		token := c.GetHeader("authorization")

		user := FindUserByToken(users, token)

		if user == nil {
			c.JSON(http.StatusUnauthorized, gin.H{
				"error": "Неверные логин или пароль",
			})
		}

		aps := FindAppointmentsByLogin(aps, user.Login)

		c.JSON(http.StatusOK, aps)
	})

	r.Run("0.0.0.0:9090")

}
