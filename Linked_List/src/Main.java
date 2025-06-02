

public class Main {
    public static void main(String[] args) {
       LinkedList LL=new LinkedList();

       LL.addLast("Now");
        LL.addLast("i");
       LL.printList();
//       System.out.println("after deleting node");
//       LL.deleteNode("ahmad");
       LL.deleteLast();
       LL.printList();
    }
}