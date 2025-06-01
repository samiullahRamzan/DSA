public class LinkedList {
    Node head;

    public void addFirst(String data){
        Node newNode=new Node(data);

        if(head==null){
            head=newNode;
            return;
        }

        newNode.next=head;
        head=newNode;
    }

    public void addLast(String data){
        Node newNode=new Node(data);

        if(head==null){
            head=newNode;
            return;
        }

        Node currNode=head;
        while(currNode.next!=null){
            currNode=currNode.next;
        }

        currNode.next=newNode;
    }

    public void printList(){
        if(head==null){
            System.out.println("List is empty!");
            return;
        }
        Node currNode=head;

        while(currNode!=null){
            System.out.print(currNode.data+"-->");
            currNode=currNode.next;
        }

        System.out.print("Null");
        System.out.println();
    }

    public String LinkedListCenter(){

        if(head==null){
            System.out.println("List is empty!");
            return "";
        }

        Node s_pointer=head;
        Node f_pointer=head;

        while(f_pointer.next != null && f_pointer.next.next != null){
            s_pointer=s_pointer.next;
            f_pointer=f_pointer.next.next;
        }

        return s_pointer.data;
    }
}
