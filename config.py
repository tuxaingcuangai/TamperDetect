class Config(object):
    """
    Common configurations
    """

    # Common configurations (can be used in all environments)


class DevelopmentConfig(Config):
    """
    Development configurations
    """

    # 开启调试模式
    DEBUG = True
    PORT = 5000

    # 数据库配置
    SQLALCHEMY_DATABASE_URI = 'sqlite:///../db.sqlite3'
    SQLALCHEMY_ECHO = True
    SQLALCHEMY_TRACK_MODIFICATIONS = False

    # 为上传文件设置一个安全目录
    UPLOAD_FOLDER = 'C:\\Users\\86151\\Desktop\\tuxiang\\upload_images'
    PROCESSED_FOLDER = 'C:\\Users\\86151\\Desktop\\tuxiang\\processed_images'
    ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}


class ProductionConfig(Config):
    """
    Production configurations
    """

    DEBUG = False


class TestingConfig(Config):
    """
    Testing configurations
    """

    TESTING = True


# Dictionary to map the configurations
config_by_name = dict(
    dev=DevelopmentConfig,
    test=TestingConfig,
    prod=ProductionConfig
)

key = "Your secret key"
