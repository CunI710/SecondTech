using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SecondTech.DataAccess.Migrations
{
    /// <inheritdoc />
    public partial class newDataMigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Characteristics_SoldProducts_SoldProductId",
                table: "Characteristics");

            migrationBuilder.DropForeignKey(
                name: "FK_PackageContents_Categories_CategoryId",
                table: "PackageContents");

            migrationBuilder.DropTable(
                name: "PackageContentEntitySoldProductEntity");

            migrationBuilder.DropTable(
                name: "SoldProducts");

            migrationBuilder.DropIndex(
                name: "IX_PackageContents_CategoryId",
                table: "PackageContents");

            migrationBuilder.DropIndex(
                name: "IX_Characteristics_SoldProductId",
                table: "Characteristics");

            migrationBuilder.DropColumn(
                name: "Address",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "City",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "Code",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "DateTime",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "Email",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "Number",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "Verified",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "ImgUrl",
                table: "Products");

            migrationBuilder.DropColumn(
                name: "CategoryId",
                table: "PackageContents");

            migrationBuilder.DropColumn(
                name: "SoldProductId",
                table: "Characteristics");

            migrationBuilder.CreateTable(
                name: "ImgUrlEntity",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    Url = table.Column<string>(type: "TEXT", nullable: false),
                    ProductEntityId = table.Column<Guid>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ImgUrlEntity", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ImgUrlEntity_Products_ProductEntityId",
                        column: x => x.ProductEntityId,
                        principalTable: "Products",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_ImgUrlEntity_ProductEntityId",
                table: "ImgUrlEntity",
                column: "ProductEntityId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ImgUrlEntity");

            migrationBuilder.AddColumn<string>(
                name: "Address",
                table: "Users",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "City",
                table: "Users",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Code",
                table: "Users",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "DateTime",
                table: "Users",
                type: "TEXT",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "Email",
                table: "Users",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Number",
                table: "Users",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<bool>(
                name: "Verified",
                table: "Users",
                type: "INTEGER",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "ImgUrl",
                table: "Products",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<Guid>(
                name: "CategoryId",
                table: "PackageContents",
                type: "TEXT",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.AddColumn<Guid>(
                name: "SoldProductId",
                table: "Characteristics",
                type: "TEXT",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "SoldProducts",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    BrandId = table.Column<Guid>(type: "TEXT", nullable: false),
                    CategoryId = table.Column<Guid>(type: "TEXT", nullable: false),
                    ColorId = table.Column<Guid>(type: "TEXT", nullable: false),
                    UserId = table.Column<Guid>(type: "TEXT", nullable: false),
                    Battery = table.Column<string>(type: "TEXT", nullable: false),
                    DateTime = table.Column<DateTime>(type: "TEXT", nullable: false),
                    Description = table.Column<string>(type: "TEXT", nullable: false),
                    ImgUrl = table.Column<string>(type: "TEXT", nullable: false),
                    Model = table.Column<string>(type: "TEXT", nullable: false),
                    Name = table.Column<string>(type: "TEXT", nullable: false),
                    Price = table.Column<int>(type: "INTEGER", nullable: false),
                    Processor = table.Column<string>(type: "TEXT", nullable: false),
                    Ram = table.Column<string>(type: "TEXT", nullable: false),
                    SaleTime = table.Column<DateTime>(type: "TEXT", nullable: false),
                    State = table.Column<string>(type: "TEXT", nullable: false),
                    Storage = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SoldProducts", x => x.Id);
                    table.ForeignKey(
                        name: "FK_SoldProducts_Brands_BrandId",
                        column: x => x.BrandId,
                        principalTable: "Brands",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_SoldProducts_Categories_CategoryId",
                        column: x => x.CategoryId,
                        principalTable: "Categories",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_SoldProducts_Colors_ColorId",
                        column: x => x.ColorId,
                        principalTable: "Colors",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_SoldProducts_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "PackageContentEntitySoldProductEntity",
                columns: table => new
                {
                    PackageContentsId = table.Column<Guid>(type: "TEXT", nullable: false),
                    SoldProductsId = table.Column<Guid>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PackageContentEntitySoldProductEntity", x => new { x.PackageContentsId, x.SoldProductsId });
                    table.ForeignKey(
                        name: "FK_PackageContentEntitySoldProductEntity_PackageContents_PackageContentsId",
                        column: x => x.PackageContentsId,
                        principalTable: "PackageContents",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_PackageContentEntitySoldProductEntity_SoldProducts_SoldProductsId",
                        column: x => x.SoldProductsId,
                        principalTable: "SoldProducts",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_PackageContents_CategoryId",
                table: "PackageContents",
                column: "CategoryId");

            migrationBuilder.CreateIndex(
                name: "IX_Characteristics_SoldProductId",
                table: "Characteristics",
                column: "SoldProductId");

            migrationBuilder.CreateIndex(
                name: "IX_PackageContentEntitySoldProductEntity_SoldProductsId",
                table: "PackageContentEntitySoldProductEntity",
                column: "SoldProductsId");

            migrationBuilder.CreateIndex(
                name: "IX_SoldProducts_BrandId",
                table: "SoldProducts",
                column: "BrandId");

            migrationBuilder.CreateIndex(
                name: "IX_SoldProducts_CategoryId",
                table: "SoldProducts",
                column: "CategoryId");

            migrationBuilder.CreateIndex(
                name: "IX_SoldProducts_ColorId",
                table: "SoldProducts",
                column: "ColorId");

            migrationBuilder.CreateIndex(
                name: "IX_SoldProducts_UserId",
                table: "SoldProducts",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Characteristics_SoldProducts_SoldProductId",
                table: "Characteristics",
                column: "SoldProductId",
                principalTable: "SoldProducts",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_PackageContents_Categories_CategoryId",
                table: "PackageContents",
                column: "CategoryId",
                principalTable: "Categories",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
