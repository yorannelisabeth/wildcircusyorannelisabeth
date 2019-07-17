package com.wildcircusyorann.wildcircusback.controllers;

import com.wildcircusyorann.wildcircusback.entities.User;
import com.wildcircusyorann.wildcircusback.repositories.UserDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class UserController {

    @Autowired
    private UserDAO dao;

    /**
     * Cette méthode est protégée car voir tous les utilisateurs est un
     * privilège du seul SUPER_ADMIN
     */
    @Secured({"SUPER_ADMIN"})
    @GetMapping(value = "/users")
    public List<User> getAll() {
        return dao.findAll();
    }

    /**
     * Cette méthode est protégée car consulter les données d'un utilisateur est
     * un privilège du seul SUPER_ADMIN
     */
    @Secured({"SUPER_ADMIN"})
    @GetMapping("/users/{id}")
    public User getById(@PathVariable("id") Long p_id) throws Exception {
        return dao.findById(p_id).get();
    }

    /**
     *
     * @param p_id L'identifiant de la l'utilisateur à MAJ
     * @param p_user L'objet de type User que le client nous envoie Cette méthode est
     *
     * protégée car la MAJ d'un utilisateur est un privilège du seul
     * SUPER_ADMIN
     */
    @Secured({"SUPER_ADMIN"})
    @PutMapping("/users/{id}")
    public User update(@PathVariable("id") Long p_id, @RequestBody User p_user) throws Exception {
        User current = dao.findById(p_id).get();

        if (p_user.getEmail() != null) {
            current.setEmail(p_user.getEmail());
        }

        if (p_user.getPassword() != null) {
            current.setPassword(p_user.getPassword());
        }

        // on ne peut modifier le rôle que si l'on est SUPER_ADMIN
        if (p_user.getRole() != null ) {
            current.setRole(p_user.getRole());
        }

        // on sauvegarde l'utilisateur et on retourne une réponse.
        return dao.save(current);

    }

    /**
     *
     * @param p_user L'objet de type user que le client nous envoie
     *
     * Cette méthode est protégée car la création d'un utilisateur
     * est un privilège du seul SUPER_ADMIN
     */
    @Secured({"SUPER_ADMIN"})
    @PostMapping("/users")
    public User create(@RequestBody User p_user) throws Exception {
        return dao.save(p_user);
    }

    /**
     *
     * @param p_id L'identifiant de l'utilisateur à supprimer
     * @return un objet de type User au format JSON
     * @throws Exception
     */
    @Secured({"SUPER_ADMIN"})
    @DeleteMapping("/users/{id}")
    public boolean delete(@PathVariable("id") Long p_id) throws Exception {
        // on supprime l'utilisateur concerné
        dao.deleteById(p_id);
        return true;

    }

}
