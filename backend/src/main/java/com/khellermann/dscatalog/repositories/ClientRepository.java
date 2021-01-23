package com.khellermann.dscatalog.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.khellermann.dscatalog.entities.Category;
import com.khellermann.dscatalog.entities.Client;
import com.khellermann.dscatalog.entities.Product;

@Repository
public interface ClientRepository extends JpaRepository<Client, Long> {

}
