/**
 * Header comment
 */

import java.util.Enumeration;

import javax.servlet.ServletContext;
import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;

/**
 * @author david.rutherford
 * @version $Revision$, $Date$
 * 
 * 
 */
public class ContextInitializerListener implements ServletContextListener {

	@Override
	public void contextDestroyed(ServletContextEvent event) {
		// TODO Auto-generated method stub

	}

	@Override
	public void contextInitialized(ServletContextEvent event) {
		//		CommonPropertyReader propReader = CommonPropertyReader.getInstance();
		//		
		//		ENABLE_DEBUG_LOGGING
		//		LOG_FILE_LOCATION
		ServletContext context = event.getServletContext();
		Enumeration paramNames = context.getInitParameterNames();
		while (paramNames.hasMoreElements()) {
			String param = (String) paramNames.nextElement();
			String value = context.getInitParameter(param);
			System.out.println(param + "=" + value);
		}

	}

}
