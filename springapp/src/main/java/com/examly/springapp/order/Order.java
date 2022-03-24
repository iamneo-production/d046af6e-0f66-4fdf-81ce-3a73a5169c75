
import java.lang.annotation.Inherited;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name="Order")
public class Order {
    @Id
    @GeneratedValue
    @Column(name="OrderId")
    public String OrderId;
    @Column(name="UserId")
    public String UserId;
    @Column(name="ProductName")
    public String ProductName;
    @Column(name="quantity")
    public int quantity;
    @Column(name="Price")
    public int Price;
    @Column(name="Status")
    public String Status;
    @Column(name="TotalPrice")
    public int TotalPrice;
    public Order(String UserId,String ProductName,int quantity,int price,String Status)
    {
        this.UserId=UserId;
        this.ProductName=ProductName;
        this.quantity=quantity;
        this.Price=price;
        this.Status=Status;
        this.TotalPrice=price*quantity;
    }
}
