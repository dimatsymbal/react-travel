import './View_Comp.scss'
;<style>
    @import
    url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,300;0,400;0,700;1,200;1,300&display=swap');
</style>
type Props = {}

const View_Comp = (props: Props) => {
    return (
        <div className="View_Comp">
            <img src="/images/view_comp_little_img.png" alt="img_view_comp" />
            <h2>Lorem ipsum dolor sit amet tetur adipis icing elit</h2>
            <button>Join us today</button>
        </div>
    )
}
export default View_Comp
