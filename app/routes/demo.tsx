import { Check, ExpandLess, ExpandMore } from "@mui/icons-material";
import { Box, Container, List, Stack, ListItemText, ListItemButton, Collapse } from "@mui/material";
import { Link, Outlet, useLocation, } from "@remix-run/react";
import { Fragment } from "react/jsx-runtime";
import { demoMenu } from "~/data/demoMenu";
import AppTopbar from "~/src/Topbar";


export default function Demo() {
  const { pathname } = useLocation();
  return (
    <Fragment>
      <AppTopbar />
      <Stack direction="row" sx={{ height: 'calc(100vh - 64px)' }}>
        <Stack spacing={2} sx={{ width: '20%', position: 'sticky', top: 0, height: '100%', overflowY: 'auto', borderRight: '1px solid #e0e0e0', p: 1 }}>
          <List dense disablePadding sx={{ backgroundColor: 'background.paper' }} component="nav">
            {demoMenu.map((item, index) => (
              <Fragment key={index}>
                <ListItemButton component={Link} to={item.to} selected={pathname.startsWith(item.to)}>
                  <ListItemText primary={item.name} />
                  {item.children?.length > 0 && (pathname.startsWith(item.to) ? <ExpandMore /> : <ExpandLess />)}
                </ListItemButton>
                {item.children?.length > 0 && (
                  <Collapse in={pathname.startsWith(item.to)} timeout={500} unmountOnExit>
                    <List dense disablePadding>
                      {item.children?.map((child, index) => (
                        <ListItemButton key={index} component={Link} to={child.to}
                          selected={item.to === child.to ? pathname === child.to : pathname.startsWith(child.to)}
                          sx={{ pl: 4, '&.Mui-selected': { opacity: 0.6, color: 'primary.main' } }}>
                          <ListItemText primary={child.name} />
                        </ListItemButton>
                      ))}
                    </List>
                  </Collapse>
                )}
              </Fragment>
            ))}
          </List>
        </Stack>
        <Box sx={{ flexGrow: 1, overflowY: 'auto', height: '100%' }}>
          <Container maxWidth="lg" sx={{ py: 3 }}>
            <Outlet />
          </Container>
        </Box>
      </Stack>
    </Fragment>
  );
}
