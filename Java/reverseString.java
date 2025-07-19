package Java;

public class reverseString {
    public static void main(String[] args) {
        String str = "Shlok";
        String revStr = " ";

        for(int i = str.length() - 1; i > 0; i--){
            revStr  = revStr + str.charAt(i);
        }
        System.err.println(revStr);
    }
}
