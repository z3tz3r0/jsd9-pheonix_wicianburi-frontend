import StarIcon from '@mui/icons-material/Star'
import { MenuItem } from '@mui/material'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import React from 'react'
import ButtonAddToCart from '../components/ButtonAddToCart'
import ButtonBuyNow from '../components/ButtonBuyNow'
import Dropdown from '../components/Dropdown'
import ProductNumberField from '../components/ProductNumberField'

const ProductDetails = ({ image, name, price, description, star, numbersReview }) => {
    return (
        <Grid container spacing={{ sm: 4, md: 6 }} sx={{ alignItems: "center" }}>

            <Grid size={{ xs: 12, sm: 6 }}>
                <img src={image} className='my-8 rounded-3xl sm:rounded-xl' alt="" />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>

                <Typography component='h1'
                    sx={{
                        fontSize: { xs: "1.25rem", md: "30px" },
                        fontWeight: 600,
                        mb: 2,
                    }}
                >
                    {name}
                </Typography>


                <Typography variant='h3' component='p'
                    sx={{
                        fontSize: { sm: "1.75rem", md: "2.5rem" },
                        mb: 2
                    }}
                >
                    ฿{Intl.NumberFormat('th-TH').format(price)}
                </Typography>

                <Typography
                    sx={{
                        fontSize: { xs: '0.75rem', md: '0.9rem' },
                        color: "var(--color-gray-400)",
                    }}
                >
                    {description}
                </Typography>

                <Box className="flex items-center" sx={{ my: { xs: 2, sm: 1 } }}>
                    <StarIcon className='mr-1 text-gray' />
                    <p className='mr-2 font-bold'>{star}</p>
                    <p className='text-gray-400'>({Intl.NumberFormat('th-TH').format(numbersReview)})</p>
                </Box>

                <FormControl fullWidth sx={{ my: 2, pr: { xs: 0, lg: 20 } }}>
                    <Stack direction="row" sx={{ width: "100%", justifyContent: "space-between" }}>
                        <Dropdown label="ปริมาณ" size="small" className="w-3/5">
                            <MenuItem value={1}>1 กิโลกรัม</MenuItem>
                            <MenuItem value={5}>5 กิโลกรัม</MenuItem>
                        </Dropdown>
                        <Stack direction={'row'}>
                            <ProductNumberField />
                        </Stack>
                    </Stack>

                    <Stack
                        direction={{ xs: "column", sm: "row" }}
                        mt={{ xs: 4, sm: 6 }}
                        mb={{ xs: 6, sm: 4 }}
                        spacing={2}
                    >
                        <ButtonBuyNow />
                        <ButtonAddToCart />
                    </Stack>
                </FormControl>

            </Grid>

        </Grid>
    )
}

export default ProductDetails