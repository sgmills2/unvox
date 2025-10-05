"use client";

import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";
import Link from "next/link";
import Header from "@/components/Header";

export default function Home() {
  return (
    <Box id="top" sx={{ backgroundColor: "background.body" }}>
      <Header />

      <Box
        component="section"
        sx={{
          minHeight: "100dvh",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: { xs: 2, sm: 4 },
          py: 12,
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.7)), url(https://upload.wikimedia.org/wikipedia/commons/5/58/Washington_March.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Box sx={{ textAlign: "center", maxWidth: 960 }}>
          <Typography level="h1" sx={{ fontWeight: 900, mb: 2, letterSpacing: -1 }}>
            UnVox
          </Typography>
          <Typography level="h2" sx={{ fontWeight: 700, mb: 3 }}>
            Empower peaceful protest. Fund safety, supplies, and solidarity.
          </Typography>
          <Button component={Link} href="#donate" size="lg" color="primary" variant="solid">
            Donate now
          </Button>
        </Box>
      </Box>

      <Box component="section" sx={{ minHeight: "80dvh", display: "grid" }}>
        <Box
          sx={{
            gridArea: "1 / 1",
            backgroundImage:
              "linear-gradient(180deg, rgba(0,0,0,0.2), rgba(0,0,0,0.85)), url(https://upload.wikimedia.org/wikipedia/commons/3/3f/March_on_Washington_edit.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Box
          sx={{
            gridArea: "1 / 1",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            p: { xs: 3, md: 6 },
          }}
        >
          <Box sx={{ maxWidth: 900, textAlign: "center" }}>
            <Typography level="h2" sx={{ fontWeight: 800, mb: 1 }}>
              History echoes. We answer.
            </Typography>
            <Typography level="body-lg" sx={{ color: "text.secondary" }}>
              From the March on Washington to today, protest has moved hearts and policy.
              UnVox channels support into the hands of those on the ground—safely, transparently,
              and equitably.
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box id="donate" component="section" sx={{ py: 10, px: { xs: 2, sm: 4 } }}>
        <Box sx={{ maxWidth: 980, mx: "auto", textAlign: "center" }}>
          <Typography level="h2" sx={{ fontWeight: 800, mb: 2 }}>
            Fuel the movement
          </Typography>
          <Typography level="body-lg" sx={{ mb: 3, color: "text.secondary" }}>
            We’re launching donations soon. Money buys first aid, legal aid, and logistics.
            Supplies keep people safe. Be first to know when we launch.
          </Typography>
          <Button size="lg" color="primary" variant="solid" disabled>
            Donations opening soon
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
