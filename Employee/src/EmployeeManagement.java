import java.util.ArrayList;
import java.util.List;

public class EmployeeManagement {
    public static void main(String[] args) {
        // Creating employee objects
        Employee emp1 = new Employee(101, "Rahul", 50000);
        Employee emp2 = new Employee(102, "Rani", 60000);
        Employee emp3 = new Employee(103, "Ramu", 70000);

        // Storing employees in a list
        List<Employee> employees = new ArrayList<>();
        employees.add(emp1);
        employees.add(emp2);
        employees.add(emp3);

        // Displaying employee details
        System.out.println("Employee Details:");
        for (Employee emp : employees) {
            emp.displayDetails();
        }
    }
}
