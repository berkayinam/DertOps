package main

import (
	"encoding/json"
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

type UserProfile struct {
	Username string `json:"username"`
	Role     string `json:"role"`
	Bio      string `json:"bio"`
}

var userProfiles = map[string]UserProfile{
	"berkay": {
		Username: "berkay",
		Role:     "DevOps Mühendisi",
		Bio:      "10+ yıl deneyimli DevOps uzmanı. Cloud mimarisi ve otomasyon konularında uzman.",
	},
	"eren": {
		Username: "eren",
		Role:     "Cloud Mühendisi",
		Bio:      "AWS ve Azure platformlarında uzman. Mikroservis mimarisi ve container teknolojileri konusunda deneyimli.",
	},
	"berke": {
		Username: "berke",
		Role:     "IoT Uzmanı",
		Bio:      "IoT sistemleri ve endüstriyel otomasyon konularında uzman. Edge computing ve sensör ağları konusunda deneyimli.",
	},
}

func getUserProfile(w http.ResponseWriter, r *http.Request) {
	username := mux.Vars(r)["username"]
	profile, ok := userProfiles[username]
	if !ok {
		w.WriteHeader(http.StatusNotFound)
		return
	}

	json.NewEncoder(w).Encode(profile)
}

func main() {
	r := mux.NewRouter()
	r.HandleFunc("/users/{username}", getUserProfile).Methods("GET")

	log.Fatal(http.ListenAndServe(":8082", r))
} 