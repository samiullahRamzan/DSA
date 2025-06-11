

public class Main {
    public static void main(String[] args) {
       LinkedList LL=new LinkedList();

       LL.addLast("Now");
       LL.addLast("i");
       LL.addLast("am");
       LL.addLast("at");
       LL.addLast("Lahore");
       LL.addLast("I");
       LL.addLast("am");
       LL.addLast("very");
       LL.addLast("nice");
       LL.addLast("guy");
       LL.addLast("ha");

       LL.printList();

       LL.Delete_M_After_N(3,2);

       LL.printList();

    }
}