import { makeStyles } from '@mui/styles';
import colors from '../../lib/colors';
export default makeStyles((theme) => ({
  container_product: {
    width: 1200,
    margin: 'auto auto',
    marginBottom: 40,
  },
  container_product_list_img: {
    width: 1200,
    margin: 'auto auto',
    marginBottom: 24,
  },
  body_grid_product_event: {
    display: 'grid',
    gridTemplateColumns: 'auto auto auto auto',
    columnGap: 10,
    rowGap: 10,
  },
  body_grid_product: {
    display: 'grid',
    gridTemplateColumns: 'auto auto auto auto auto',
    columnGap: 10,
    rowGap: 10,
  },

  body_grid_category_product: {
    display: 'grid',
    gridTemplateColumns: 'auto auto auto auto',
    columnGap: 2,
    rowGap: 2,
  },
  body_grid_product_sale: {
    display: 'grid',
    gridTemplateColumns: 'auto auto auto auto auto auto',
    columnGap: 2,
    rowGap: 2,
  },
  container_btn_show_product: {
    width: '100%',
    height: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  btn_show_product: {
    display: 'flex',
    justifyContent: 'cemter',
    alignItems: 'cemter',
    borderRadius: 10,
    '&:hover': {
      border: `1px solid ${colors.green}`,
      padding: '8px 16px',
    },
    cursor: 'pointer',
  },
  text_show_product: {},
  time_voucher: {
    display: 'flex',
    alignItems: 'center',
  },
  item_time_voucher: {
    padding: '8px 12px',
    backgroundColor: colors.orange,
    borderRadius: 4,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  box_head_flashare: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  box_head_flashare_left: {
    width: '500px',
    height: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box_head_flashare_left_title: {
    width: '500px',
    height: 60,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.black,
  },
  box_head_flashare_left_time: {
    width: '500px',
    height: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.orange,
  },
  box_header_item_category: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  box_intro_event: {
    height: 120,
    width: '70%',
    margin: '40px auto',
  },
  box_intro_event_2: {
    height: 120,
    width: '29%',
    margin: '40px auto',
  },
  img_intro_event: {
    width: '100%',
    height: '100%',
  },
  container_item_banner: {
    position: 'relative',
    width: '20%',
    height: 610,
    '&:hover .item_banner .img_banner': {
      transform: 'scale(1.1)',
    },
    overflow: 'hidden',
    borderRadius: 8,
  },
  item_banner: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    borderRadius: 8,
    cursor: 'pointer',
  },
  img_banner: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
    transition: '0.4s ease',
    // '&:hover': {
    //   transform: 'scale3d(1.1,1.1,1)',
    //   // transform: 'scale(1.1)',
    //   // transition: 'opacity 1s ease 0s,transform 1s ease 0s',
    // },
  },
  container_expend: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  bx_expend: {
    width: 1200,
    padding: '40px 0px',

    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  left_content: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    width: '40%',
    marginRight: 20,
  },
  right_content: {
    width: '49%',
  },
}));
