package com.examly.springapp.customer;
import org.springframework.data.repository.CrudRepository;
public interface AccountRepository extends CrudRepository<Account,Integer>{
    
}
