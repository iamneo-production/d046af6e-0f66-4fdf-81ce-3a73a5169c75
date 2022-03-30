package com.examly.springapp.customer;
import org.springframework.data.repository.CrudRepository;
// import org.springframework.data.repository.JpaRepository;
import java.util.List;
public interface AccountRepository extends CrudRepository<Account,Integer>{
    // List<Account> findByEmail(String email);
}
