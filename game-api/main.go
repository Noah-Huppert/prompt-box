package main

import (
	"github.com/gin-gonic/gin"

	"net/http"
)

func main() {
	router := gin.Default()

	gameAPI := NewGameAPI()
	gameAPI.RegisterRoutes(router)

	router.Run()
}

type GameAPI struct {
}

func NewGameAPI() GameAPI {
	return GameAPI{}
}

func (api GameAPI) RegisterRoutes(router *gin.Engine) {
	router.GET("/health", api.MetaHealth)
}

func (api GameAPI) MetaHealth(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"ok": true,
	})
}
