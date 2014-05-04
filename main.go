package main

import (
	"fmt"
	"github.com/go-martini/martini"
)

func main() {
	m := martini.Classic()

	m.Get("/", func() string {
		return "Hello World"
	})

	m.Use(martini.Static("public"))
	m.Run()
	fmt.Println("Started RoS Server")
}
