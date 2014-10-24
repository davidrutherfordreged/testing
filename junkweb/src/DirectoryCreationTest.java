import java.io.File;
import java.io.IOException;

/**
 * dummy test class
 * another comment line
 * @author david.rutherford
 * @version $Revision$
 */
public class DirectoryCreationTest {

    /**
     * @param args
     * @throws IOException 
     */
    public static void main(String[] args) throws IOException {
        //File theFile = new File("C:\\build\\AutoDeploy\\deploy\\test1\\test2\\test3\\");
        //System.out.println(theFile.mkdirs());
        File file1 = new File("c:\\build");
        File file2 = new File("c://build");
        File file3 = new File("c:\\Build");
        System.out.println(file1.equals(file2));
        System.out.println(file1.equals(file3));
        file1 = new File("c:/build/dummy.txt");
        file2 = new File("c:/build/temp/../dummy.txt");
        System.out.println(file1.equals(file2));
        System.out.println(file1.getCanonicalPath());
        System.out.println(file2.getCanonicalPath());

    }

}
