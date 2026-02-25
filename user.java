public class user {
    String name;
    String message;
    int idade;
    Float altura;

    void status() {
        if (idade >= 18) {
            message = "Maior";
        } else {
            message = "Menor";
        }
    }
}
