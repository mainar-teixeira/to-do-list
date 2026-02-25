import java.util.Scanner;

public class cadastroDeAlunos{
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        user usuario = new user();
        

        System.out.printf("Digite seu nome: ");
        usuario.name = input.nextLine();
        System.out.printf("Digite sua idade: ");
        usuario.idade = input.nextInt();
        System.out.printf("Digite sua altura: ");
        usuario.altura = input.nextFloat();

        
        System.out.println("===== DADOS DO USUÁRIO =====");
        System.out.println("Nome: " + usuario.name);
        System.out.println("Idade: " + usuario.idade);
        System.out.printf("Altura: %.2f m\n", usuario.altura);
        usuario.status();
        System.out.println("Status: " + usuario.message + " de idade");

        
    }
}