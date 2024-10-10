import java.util.Arrays;
import java.util.List;
import java.util.Scanner;

public class RPS {

    public static boolean isValidChoice(String choice) {
        List<String> validChoices = Arrays.asList("pedra", "papel", "tesoura");
        return validChoices.contains(choice);
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Escolha pedra, papel ou tesoura:");
        String userChoice = "";
        
        try {
            userChoice = scanner.nextLine().toLowerCase();
        } catch (Exception e) {
            System.out.println("Erro ao ler a entrada: " + e.getMessage());
        }

        if (isValidChoice(userChoice)) {
            System.out.println("Você escolheu: " + userChoice);
        } else {
            System.out.println("Escolha inválida! Tente novamente.");
        }

        scanner.close();
    }
}

