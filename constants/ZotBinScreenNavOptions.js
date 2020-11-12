/**
 *  Returns navigation options and styling for each app screen.
 *
 *  @param title  the title of the screen
 *  @return       screen nav options
 */
export default function ZotBinScreenNavOptions(title) {
  return {
    title: title,
    headerStyle: {
      elevation: 0,
    },
    headerTitleStyle: {
      fontWeight: "bold",
      fontSize: 35,
    },
  };
}
